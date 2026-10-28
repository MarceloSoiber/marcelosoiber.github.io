// @vitest-environment jsdom
/* eslint-disable vue/one-component-per-file */

import { createApp, defineComponent, h, nextTick, ref } from 'vue'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import ProjectCaseStudy from '../src/components/ProjectCaseStudy.vue'
import ProjectDetailsModal from '../src/components/ProjectDetailsModal.vue'
import { pt } from '../src/content/pt'
import type { Project } from '../src/content/schema'

const project = pt.projects.items[0]

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.setAttribute('open', '')
  }
  HTMLDialogElement.prototype.close = function close() {
    this.removeAttribute('open')
    this.dispatchEvent(new Event('close'))
  }
})

afterEach(() => {
  document.body.innerHTML = ''
  document.documentElement.classList.remove('has-open-dialog')
})

describe('project interactions', () => {
  it('emits the selected project from the localized details CTA', async () => {
    const openDetails = vi.fn()
    const host = document.createElement('div')
    document.body.append(host)

    const app = createApp({
      render: () =>
        h(ProjectCaseStudy, {
          project,
          position: 0,
          repositoryLabel: pt.projects.repositoryLabel,
          challengeLabel: pt.projects.challengeLabel,
          decisionLabel: pt.projects.decisionLabel,
          resultLabel: pt.projects.resultLabel,
          caseStudyLabel: pt.projects.details.caseStudy,
          detailsLabel: pt.projects.details.open,
          onOpenDetails: openDetails,
        }),
    })

    app.mount(host)
    const button = host.querySelector<HTMLButtonElement>('.project__details')
    expect(button?.textContent).toContain(pt.projects.details.open)
    button?.click()
    expect(openDetails).toHaveBeenCalledWith(project)
    app.unmount()
  })

  it('opens an accessible project dialog and closes it through its action', async () => {
    const selected = ref<Project | null>(null)
    const closed = vi.fn(() => {
      selected.value = null
    })
    const host = document.createElement('div')
    document.body.append(host)

    const Harness = defineComponent({
      setup() {
        return () =>
          h(ProjectDetailsModal, {
            project: selected.value,
            labels: pt.projects.details,
            repositoryLabel: pt.projects.repositoryLabel,
            onClose: closed,
          })
      },
    })

    const app = createApp(Harness)
    app.mount(host)
    selected.value = project
    await nextTick()
    await nextTick()

    const dialog = host.querySelector<HTMLDialogElement>('dialog')
    const title = host.querySelector<HTMLHeadingElement>('h2')
    expect(dialog?.open).toBe(true)
    expect(dialog?.getAttribute('aria-labelledby')).toBe(title?.id)
    expect(title?.textContent).toBe(project.name)
    expect(host.textContent).toContain(pt.projects.details.architecture)
    expect(host.textContent).toContain(project.details.nextSteps[0])

    host.querySelector<HTMLButtonElement>('.project-modal__close')?.click()
    expect(closed).toHaveBeenCalledOnce()
    expect(selected.value).toBeNull()
    app.unmount()
  })
})

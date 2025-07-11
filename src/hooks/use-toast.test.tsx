import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'

let useToastFn: typeof import('./use-toast').useToast
let toastFn: typeof import('./use-toast').toast

beforeEach(async () => {
  vi.resetModules()
  const mod = await import('./use-toast')
  useToastFn = mod.useToast
  toastFn = mod.toast
})

describe('useToast', () => {
  test('creates a toast', () => {
    const { result } = renderHook(() => useToastFn())

    act(() => {
      toastFn({ title: 'hello' })
    })

    expect(result.current.toasts.length).toBe(1)
    expect(result.current.toasts[0].title).toBe('hello')
    expect(result.current.toasts[0].open).toBe(true)
  })

  test('dismisses a toast', () => {
    const { result } = renderHook(() => useToastFn())

    let id: string | undefined
    act(() => {
      id = toastFn({ title: 'bye' }).id
    })

    act(() => {
      result.current.dismiss(id)
    })

    expect(result.current.toasts[0].open).toBe(false)
  })
})

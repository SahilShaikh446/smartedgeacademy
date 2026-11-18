import { capturePostHogEvent } from "@/lib/posthog"

export interface Event {
  name: string
  properties?: Record<string, string | number | boolean | null>
}

export function trackEvent(input: Event): void {
  if (input?.name) {
    capturePostHogEvent(input.name, input.properties)
  }
}

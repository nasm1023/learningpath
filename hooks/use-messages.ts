import { create } from "zustand"

type MessageState = {
    messages: string[]
    addMessage: (message: string) => void
    clearMessages: () => void
}

export const useMessages = create<MessageState>((set) => ({
    messages: [],
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    clearMessages: () => set({ messages: [] }),
}))

"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CirclePlus, Plus, Send } from "lucide-react"

export function ChatInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleInput = () => {
        const el = textareaRef.current
        if (!el) return
        el.style.height = "auto"
        el.style.height = el.scrollHeight + "px"
    }

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex justify-center items-center gap-4 rounded-2xl border bg-background px-3 py-2 shadow-sm">

                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="rounded-full "
                >
                    <Plus className="w-5 h-5" />
                </Button>

                <Textarea
                    ref={textareaRef}
                    onInput={handleInput}
                    placeholder="Message ChatGPT..."
                    className="min-h-[20px] max-h-[200px] resize-none border-0 shadow-none bg-transparent focus:ring-0 focus-visible:ring-0"
                />

                <Button
                    type="submit"
                    size="icon"
                    className="rounded-full"
                >
                    <Send className="w-5 h-5" />
                </Button>

            </div>
        </div >
    )
}

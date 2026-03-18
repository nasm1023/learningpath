"use client"

interface MessagesProps {
    messages: string[]
}

export function MessagesContrainer({ messages }: MessagesProps) {
    return (
        <div className="w-full max-w-2xl mx-auto overflow-y-auto p-4">
            {messages.map((message, index) => {
                const isBot = index % 2 === 0
                return (
                    <>
                        <div key={index} className={`${isBot ? "text-right" : "text-left"} overflow-x-clip py-4`} >{message}</div>
                    </>
                )
            })}
        </div>
    )
}

'use client'

import { AppSidebar } from "@/components/ui/app-sidebar"
import { ChatInput } from "@/components/chat-input/chat-input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useMessages } from "@/hooks/use-messages"
import { useEffect } from "react"
import { MessagesContrainer } from "@/components/messagesContrainer/messagesContrainer"

export default function Page() {
  const messages = useMessages((state) => state.messages)
  const { addMessage, clearMessages } = useMessages()
  // useEffect(() => {
  //   console.log("Messages")
  //   addMessage("Welcome to the Data Fetching page!")
  //   addMessage("Wdsaddsaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddd")
  // }, [])
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className={`${messages.length > 0 ? "flex flex-col w-full h-[calc(100vh-64px)]" : "flex flex-col w-full h-[calc(100vh-64px)] justify-center items-center"}`}>
          <div className={`${messages.length > 0 ? "flex-1 overflow-y-auto" : ""}`}>
            {messages.length > 0 ? (
              <MessagesContrainer messages={messages} />
            ) : (
              <div className="h-full flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">How can I help you today?</h1>
              </div>
            )}
          </div>
          <div className="shrink-0 p-4 w-full">
            <ChatInput />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}

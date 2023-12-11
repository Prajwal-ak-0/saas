"use client";

import * as z from "zod";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Heading } from "../_components/Heading";
import { Loader } from "../_components/Loader";
import { UserAvatar } from "../_components/UserAvatar";
import { BotAvatar } from "../_components/BotAvatar";
import { ChatCompletionRequestMessage } from "openai";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
});

const CodePage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  const isLoading = form.formState.isSubmitting;

  const scrollToBottom = () => {
    if (messagesContainerRef.current && lastMessageRef.current) {
      const messagesContainer = messagesContainerRef.current;
      const lastMessage = lastMessageRef.current;

      const offset = lastMessage.offsetTop - messagesContainer.offsetTop;
      messagesContainer.scrollTop = offset;
    }
  };

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages]);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom on message update
  }, [messages]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post('/api/code', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        // Handle specific error case if needed
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  }

  return (
    <div className="flex flex-col h-screen relative">
      <div className="flex-grow mt-4">
        <Heading
          title="Code Generation"
          description="Generate code using descriptive text."
          Icon={Code}
          iconColor="text-green-700"
          bgColor="bg-green-700/10"
        />
        <div className="px-4 lg:px-8 flex-grow overflow-y-auto" ref={messagesContainerRef}>
          <div className="space-y-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader />
              </div>
            )}
            {messages.length === 0 && !isLoading && (
              <h1>No conversation started.</h1>
            )}
            <div className="flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  ref={index === messages.length - 1 ? lastMessageRef : null}
                  className={`
                    p-8 w-full flex items-start gap-x-8 rounded-lg
                    ${message.role === "user" ? "bg-white border border-black/10" : "bg-muted"}
                  `}
                >
                  {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <ReactMarkdown components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    )
                  }} className="text-sm overflow-hidden leading-7">
                    {message.content || ""}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
            rounded-lg
            mx-6
            md:mb-[56px]
            border
            sm:mb-10
            px-3
            md:px-8
            focus-within:shadow-sm
            grid
            grid-cols-12
            "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Simple toggle button using react hooks."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
              Generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CodePage;

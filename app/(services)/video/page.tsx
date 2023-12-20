"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FileAudio } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "../_components/Loader";
import { Heading } from "../_components/Heading";
// import { useProModal } from "@/hooks/use-pro-modal";

const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required."
    }),
});

const VideoPage = () => {
    const router = useRouter();
    // const proModal = useProModal();
    const [video, setVideo] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setVideo(undefined);

            const response = await axios.post('/api/video', values);

            setVideo(response.data[0]);
            form.reset();
        } catch (error: any) {
            if (error?.response?.status === 403) {
                // proModal.onOpen();
            } else {
                toast.error("Something went wrong.");
            }
        } finally {
            router.refresh();
        }
    }

    return (
        <div>
            <div className="sm:pt-4 pt-2">

                <Heading
                    title="Video Generation"
                    description="Turn your prompt into video."
                    Icon={FileAudio}
                    iconColor="text-orange-700"
                    bgColor="bg-orange-700/10"
                />
            </div>
            <div className="px-4 lg:px-8">
                {isLoading && (
                    <div className="p-20 sm:pb-[290px]">
                        <Loader />
                    </div>
                )}
                {!video && !isLoading && (
                    <div className="flex flex-col gap-y-4 h-[calc(95vh-200px)] overflow-y-auto">
                    <h1>No Video Generated</h1>
                </div>
                )}
                {video && (
                    <video controls className="w-full flex flex-col gap-y-4 h-[calc(95vh-200px)] sm:h-[calc(100vh-200px)] overflow-y-auto">
                        <source src={video} />
                    </video>
                )}
            </div>
            <div className="mb-auto">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
              rounded-lg 
              border 
              p-4 
              mx-3
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
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
                                            placeholder="Clown fish swimming in a coral reef"
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

export default VideoPage;

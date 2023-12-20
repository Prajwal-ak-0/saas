"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Music, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "../_components/Loader";
import { Heading } from "../_components/Heading";
// import { useProModal } from "@/hooks/use-pro-modal";

const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Music prompt is required"
    }),
});

const MusicPage = () => {
    // const proModal = useProModal();
    const router = useRouter();
    const [music, setMusic] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined);

            const response = await axios.post('/api/music', values);
            console.log(response)

            setMusic(response.data.audio);
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
                    title="Music Generation"
                    description="Turn your prompt into music."
                    Icon={Music}
                    iconColor="text-emerald-500"
                    bgColor="bg-emerald-500/10"
                />
            </div>

            <div className="px-4 lg:px-8">

                {isLoading && (
                    <div className="p-20 sm:pb-[290px]">
                        <Loader />
                    </div>
                )}
                {!music && !isLoading && (
                    <div className="flex flex-col gap-y-4 h-[calc(95vh-200px)] overflow-y-auto">
                        <h1>No Music Generated</h1>
                    </div>
                )}
                {music && (
                    <audio controls className="w-full flex flex-col gap-y-4 h-[calc(95vh-200px)] sm:h-[calc(100vh-200px)] overflow-y-auto">
                        <source src={music} />
                    </audio>
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
              mx-6
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
                                            placeholder="Piano solo"
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

export default MusicPage;

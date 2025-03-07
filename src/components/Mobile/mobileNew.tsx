"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Esquema de validación con Zod para el formulario
const formSchema = z.object({
  title: z.string().min(1, { message: "El título es obligatorio" }),
  content: z.string().min(1, { message: "El contenido es obligatorio" }),
});

// Inferir el tipo de datos del formulario a partir del esquema de Zod
type FormData = z.infer<typeof formSchema>;

export function MobileNew() {
  // 1. Definir el formulario con React Hook Form y Zod
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  // 2. Definir el manejador de envío (onSubmit)
  async function onSubmit(values: FormData) {
    // Llamar a la API para crear una nueva nota
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Nota creada con éxito");
        form.reset(); // Limpiar el formulario
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error al crear la nota:", error);
      alert("Hubo un problema al enviar la nota.");
    }
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-lg">Crear nueva nota (beta)</h1>
      </div>

      {/* Formulario */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Campo Título */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Escribe el título"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormDescription>
                  Este será el título de tu nota.
                </FormDescription>
                <FormMessage>
                  {form.formState.errors.title?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Campo Contenido */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contenido</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Escribe el contenido"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormDescription>
                  Este será el contenido de tu nota.
                </FormDescription>
                <FormMessage>
                  {form.formState.errors.content?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Botón de Enviar */}
          <Button type="submit">Crear Nota</Button>
        </form>
      </Form>
    </div>
  );
}

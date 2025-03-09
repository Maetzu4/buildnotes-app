"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CircleCheckBig } from "lucide-react";
import { toast } from "sonner"; // Importar la función toast de sonner

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
        // Mostrar notificación de éxito con Sonner
        toast.success("Nota creada con éxito", {
          description: "Tu nota ha sido guardada correctamente.",
        });
        form.reset(); // Limpiar el formulario
      } else {
        const result = await response.json();
        // Mostrar notificación de error con Sonner
        toast.error("Error al crear la nota", {
          description: result.error || "Hubo un problema al guardar la nota.",
        });
      }
    } catch (error) {
      console.error("Error al crear la nota:", error);
      // Mostrar notificación de error con Sonner
      toast.error("Error", {
        description: "Hubo un problema al enviar la nota.",
      });
    }
  }

  return (
    <div className="p-4">
      {/* Formulario */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="text-end">
            <Button
              size="lg"
              type="submit"
              className="bg-transparent hover:bg-transparent p-2 transition-transform duration-300 hover:scale-110"
            >
              <CircleCheckBig className="h-6 w-6" />
            </Button>
          </div>

          {/* Campo Título */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Título"
                    {...field}
                    className="bg-transparent border-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-0 text-lg font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Campo Contenido (Textarea) */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Empieza a escribir aqui..."
                    {...field}
                    className="bg-transparent border-none shadow-none resize-none min-h-[300px] focus-visible:ring-offset-0 focus-visible:ring-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.1";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("re_gxPhnPRw_K8fcg7quhac6N6AUGD6hAeHu"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Alle Felder sind erforderlich" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Store contact message in database
    const { error: dbError } = await supabase
      .from("contacts")
      .insert({
        name,
        email,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Fehler beim Speichern der Nachricht" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email notification to you
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["hermsdevelopment@gmail.com"],
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Diese Nachricht wurde über Ihr Portfolio-Kontaktformular gesendet.</small></p>
      `,
    });

    // Send confirmation email to sender
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Nachricht erhalten - Danke für Ihre Kontaktaufnahme",
      html: `
        <h2>Vielen Dank für Ihre Nachricht!</h2>
        <p>Hallo ${name},</p>
        <p>ich habe Ihre Nachricht erhalten und werde mich so schnell wie möglich bei Ihnen melden.</p>
        <p><strong>Ihre Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Beste Grüße</p>
        <hr>
        <p><small>Diese automatische Bestätigung wurde von hermsdevelopment@gmail.com gesendet.</small></p>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Nachricht erfolgreich gesendet" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Fehler beim Senden der Nachricht" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

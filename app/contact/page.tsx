"use client";

import { useRef, useState } from "react";
import React from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSending(true);
    emailjs
      .sendForm(
        "service_0t2kasr",
        "template_qvdu8nw",
        form.current ? form.current : "",
        "PKP2GUXcv8AvBk6Mn"
      )
      .then(
        (_) => {
          setSending(false);
          alert("message a été envoyer avec success");
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: "+242 06 689 02 78",
      subtitle: "Lun-Ven 9h-18h",
    },
    {
      icon: Mail,
      title: "Email",
      details: "mohamedelhadjissa@gmail.com",
      subtitle: "Réponse sous 24h",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 av de la france",
      subtitle: "75001 Poto-Poto, Brazzaville",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lun-Ven: 9h-18h",
      subtitle: "Sam: 10h-16h",
    },
  ];

  const faq = [
    {
      question: "Quels sont les délais de livraison ?",
      answer:
        "Nous livrons sous 24-48h en Brazza métropolitaine et sous 3-5 jours extérieurement.",
    },
    {
      question: "Comment puis-je retourner un produit ?",
      answer:
        "Vous avez 30 jours pour retourner un produit. Contactez-nous pour obtenir une étiquette de retour gratuite.",
    },
    {
      question: "Acceptez-vous les paiements en plusieurs fois ?",
      answer:
        "Oui, nous acceptons les paiements en 3x sans frais à partir de 5000FCFA d'achat.",
    },
    {
      question: "Comment suivre ma commande ?",
      answer:
        "Un email de suivi vous sera envoyé dès l'expédition avec un numéro de tracking.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
              Contactez-nous
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider. N'hésitez pas à nous
              contacter pour toute question.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-gray-900" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Envoyez-nous un message
              </h2>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    name="name"
                    type="text"
                    required
                    className="mt-1"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    type="text"
                    required
                    className="mt-1"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  name="reply_to"
                  required
                  className="mt-1"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div>
                <Label htmlFor="telephone">Téléphone</Label>
                <Input
                  id="telephone"
                  type="tel"
                  className="mt-1"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <Label htmlFor="sujet">Sujet *</Label>
                <select
                  id="sujet"
                  name="subject"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="commande">Question sur une commande</option>
                  <option value="produit">Question sur un produit</option>
                  <option value="livraison">Livraison</option>
                  <option value="retour">Retour/Échange</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="w-full bg-gray-900 hover:bg-gray-800"
                onClick={handleSubmit}
              >
                <Send className="w-5 h-5 mr-2" />
                {sending ? "..." : "Envoyer le message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                    {index < faq.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-900 rounded-xl p-6 sm:p-8 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Besoin d'une aide immédiate ?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Notre service client est disponible du lundi au vendredi de 9h à
            18h. Nous nous engageons à répondre à tous vos messages dans les 24
            heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appelez-nous
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email direct
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

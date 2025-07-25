"use client"

import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect } from "react"
import Header from "../components/header"

// Define the post type
type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  author: string
  authorRole: string
  date: string
  readTime: string
}

export default function BlogPost({ post }: { post: Post }) {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Sample related posts - static data, no DB required
  const relatedPosts = [
    {
      slug: "hubspot-automation-tips",
      title: "5 automatisations HubSpot qui vont révolutionner votre marketing",
      image: "/placeholder.svg?height=600&width=800",
      category: "HubSpot CRM",
      date: "5 juin 2025",
    },
    {
      slug: "odoo-hubspot-integration",
      title: "Intégration Odoo-HubSpot : le guide complet",
      image: "/placeholder.svg?height=600&width=800",
      category: "Transformation Digitale",
      date: "28 mai 2025",
    },
    {
      slug: "odoo-analytical-accounting",
      title: "Comment configurer la comptabilité analytique dans Odoo",
      image: "/placeholder.svg?height=600&width=800",
      category: "Tutoriels",
      date: "8 mai 2025",
    },
  ]

  // Function to get category color
  const getCategoryColor = (categoryName: string) => {
    const categories: { [key: string]: string } = {
      "Odoo ERP": "#714b67",
      "HubSpot CRM": "#ff5c35",
      "Transformation Digitale": "#000000",
      "Études de Cas": "#0070f3",
      Tutoriels: "#10b981",
    }
    return categories[categoryName] || "#000000"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header scrollY={scrollY} isLoaded={isLoaded} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100 mt-24 md:mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-black transition-colors">
              Accueil
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="/blog" className="hover:text-black transition-colors">
              Blog
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-black">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="pt-12 pb-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="px-4 py-2 rounded-full text-white text-sm font-medium inline-block mb-6"
            style={{ backgroundColor: getCategoryColor(post.category) }}
          >
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-black">{post.author}</div>
                <div className="text-sm text-gray-500">{post.authorRole}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 className="w-4 h-4 mr-2" /> Partager
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="lead">{post.excerpt}</p>

            <p>
              Dans cet article, nous allons vous présenter notre méthodologie éprouvée pour réaliser cette migration
              tout en préservant l'intégrité de vos données et en minimisant les perturbations pour votre activité.
            </p>

            <h2>Pourquoi migrer vers Odoo 18 ?</h2>

            <p>
              Avant de plonger dans les aspects techniques de la migration, il est important de comprendre les avantages
              qu'offre Odoo 18 par rapport à la version 15 :
            </p>

            <ul>
              <li>
                <strong>Performance améliorée</strong> : Odoo 18 offre des temps de chargement jusqu'à 85% plus rapides
                et une meilleure gestion des ressources serveur.
              </li>
              <li>
                <strong>Interface utilisateur modernisée</strong> : Une expérience utilisateur repensée, plus intuitive
                et responsive.
              </li>
              <li>
                <strong>Nouvelles fonctionnalités</strong> : De nombreux modules ont été enrichis avec des
                fonctionnalités attendues par les utilisateurs.
              </li>
              <li>
                <strong>Sécurité renforcée</strong> : Mise à jour des protocoles de sécurité pour une protection
                optimale de vos données.
              </li>
              <li>
                <strong>Support à long terme</strong> : Les anciennes versions comme Odoo 15 ne bénéficieront plus de
                mises à jour de sécurité à l'avenir.
              </li>
            </ul>

            <h2>Notre méthodologie de migration en 5 étapes</h2>

            <h3>1. Audit et préparation</h3>

            <p>
              La première étape consiste à réaliser un audit complet de votre installation Odoo 15 actuelle. Nous
              analysons :
            </p>

            <ul>
              <li>Les modules standards et personnalisés utilisés</li>
              <li>Les personnalisations spécifiques (code, rapports, workflows)</li>
              <li>Le volume et la structure de vos données</li>
              <li>Les intégrations avec d'autres systèmes</li>
            </ul>

            <p>
              Cette phase nous permet d'identifier les potentiels points de friction et d'établir un plan de migration
              sur mesure.
            </p>

            <h3>2. Environnement de test</h3>

            <p>
              Nous créons un environnement de test complet qui reproduit fidèlement votre système de production. Cette
              étape est cruciale car elle nous permet de :
            </p>

            <ul>
              <li>Tester la migration sans risque pour vos données de production</li>
              <li>Identifier et résoudre les problèmes de compatibilité</li>
              <li>Adapter les modules personnalisés à la nouvelle version</li>
              <li>Mesurer les performances et optimiser la configuration</li>
            </ul>

            <blockquote>
              <p>
                "La migration d'Odoo 15 vers Odoo 18 réalisée par Blackswantechnology a donné une nouvelle vie à notre
                système. Les performances et les nouvelles fonctionnalités ont transformé notre productivité."
              </p>
              <cite>— Younes SAFOUAT, Fondateur & CEO, Worqbox</cite>
            </blockquote>

            <h2>Conclusion</h2>

            <p>
              La migration vers Odoo 18 représente un investissement stratégique pour votre entreprise. Bien planifiée
              et exécutée, elle vous permettra de bénéficier d'un système plus performant, plus sécurisé et doté des
              dernières fonctionnalités.
            </p>

            <p>
              Notre équipe d'experts certifiés Odoo est à votre disposition pour vous accompagner dans cette transition
              importante. N'hésitez pas à nous contacter pour discuter de votre projet de migration.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12">
            <div className="text-sm font-medium text-gray-700 mr-2">Tags:</div>
            {["Odoo", "Migration", "ERP", "Odoo 18", "Données"].map((tag) => (
              <a
                key={tag}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">{post.author}</h3>
                <div className="text-sm text-gray-500 mb-3">{post.authorRole}</div>
                <p className="text-gray-600">
                  Expert avec plus de 10 ans d'expérience dans l'implémentation et la migration d'ERP. A dirigé plus de
                  50 projets de migration réussis pour des entreprises de toutes tailles.
                </p>
              </div>
            </div>
          </div>

          {/* Social Sharing - Static only, no functionality */}
          <div className="mt-8 flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 mr-2">Partager:</span>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                <Facebook className="w-4 h-4 text-[#1877F2]" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                <Twitter className="w-4 h-4 text-[#1DA1F2]" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8">Articles Similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.slug}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium"
                    style={{ backgroundColor: getCategoryColor(relatedPost.category) }}
                  >
                    {relatedPost.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{relatedPost.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#714b67] transition-colors duration-300 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <a
                    href={`/blog/${relatedPost.slug}`}
                    className="text-[#714b67] font-medium text-sm flex items-center group-hover:underline"
                  >
                    Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Prêt à migrer vers <span className="text-[#714b67]">Odoo 18</span> ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est prête à vous accompagner dans votre projet de migration. Contactez-nous pour une
            évaluation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#714b67] text-white hover:bg-[#714b67]/90 px-8 py-6 text-lg font-medium rounded-xl"
            >
              Demander un Devis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg font-medium rounded-xl"
            >
              En Savoir Plus
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white shadow-lg"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Retour au Blog
        </Button>
      </div>
    </div>
  )
}

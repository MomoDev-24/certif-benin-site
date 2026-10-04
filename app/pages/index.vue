<template>
  <div class="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans antialiased selection:bg-emerald-800 selection:text-white">
    <!-- Barre Institutionnelle Supérieure -->
    <div class="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Projet national de traçabilité et d'authentification du <strong>Made in Benin</strong></span>
        </div>
        <div class="flex items-center gap-4 text-stone-400">
          <span>Porté par <strong>Véronique KINDE</strong></span>
          <span class="hidden sm:inline">•</span>
          <a @click.prevent="scrollToSection('contact')" href="#contact" class="hover:text-amber-400 transition-colors cursor-pointer">
            Phase Pilote 2026
          </a>
        </div>
      </div>
    </div>

    <!-- En-tête / Navigation Fixe -->
<!--    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm transition-all duration-300">-->
<!--      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">-->
<!--        &lt;!&ndash; Logo Éditorial &ndash;&gt;-->
<!--        <a href="#" @click.prevent="scrollToTop" class="flex items-center gap-3.5 group cursor-pointer">-->
<!--          <div class="w-11 h-11 bg-emerald-800 text-white rounded-lg flex items-center justify-center font-serif text-2xl font-bold tracking-tight shadow group-hover:bg-emerald-900 transition-colors">-->
<!--            CB-->
<!--          </div>-->
<!--          <div>-->
<!--            <div class="flex items-center gap-1.5">-->
<!--              <span class="text-2xl font-serif font-black tracking-tight text-stone-900">Certi<span class="text-emerald-800">Bénin</span></span>-->
<!--              <span class="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>-->
<!--            </div>-->
<!--            <p class="text-[11px] font-medium uppercase tracking-widest text-stone-500 -mt-0.5">La preuve de l'origine</p>-->
<!--          </div>-->
<!--        </a>-->

<!--        &lt;!&ndash; Liens avec indicateur jaune animé &ndash;&gt;-->
<!--        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">-->
<!--          <a-->
<!--              v-for="item in navItems"-->
<!--              :key="item.id"-->
<!--              :href="`#${item.id}`"-->
<!--              @click.prevent="scrollToSection(item.id)"-->
<!--              class="relative py-2 transition-colors duration-200 hover:text-emerald-800"-->
<!--              :class="activeSection === item.id ? 'text-stone-900 font-bold' : 'text-stone-600'"-->
<!--          >-->
<!--            {{ item.label }}-->
<!--            &lt;!&ndash; Soulignement Jaune/Ambré Animé &ndash;&gt;-->
<!--            <span-->
<!--                class="absolute left-0 bottom-0 h-[3px] bg-amber-400 rounded-full transition-all duration-300 ease-out"-->
<!--                :class="activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'"-->
<!--            ></span>-->
<!--          </a>-->
<!--        </nav>-->

<!--        &lt;!&ndash; Boutons d'Action &ndash;&gt;-->
<!--        <div class="flex items-center gap-3">-->
<!--          <a-->
<!--              href="#simulateur"-->
<!--              @click.prevent="scrollToSection('simulateur')"-->
<!--              class="hidden sm:inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-all duration-200"-->
<!--          >-->
<!--            Scanner un lot-->
<!--          </a>-->
<!--          <a-->
<!--              href="#contact"-->
<!--              @click.prevent="scrollToSection('contact')"-->
<!--              class="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-md shadow-sm transition-all duration-200 hover:shadow"-->
<!--          >-->
<!--            Solliciter un pilote-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </header>-->
    <!-- En-tête / Navigation Fixe & Responsive -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">

        <!-- Logo Éditorial -->
        <a href="#" @click.prevent="scrollToTop" class="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer z-50">
          <div class="w-9 h-9 sm:w-11 sm:h-11 bg-emerald-800 text-white rounded-lg flex items-center justify-center font-serif text-lg sm:text-2xl font-bold tracking-tight shadow group-hover:bg-emerald-900 transition-colors">
            CB
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xl sm:text-2xl font-serif font-black tracking-tight text-stone-900">Certi<span class="text-emerald-800">Bénin</span></span>
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            </div>
            <p class="text-[9px] sm:text-[11px] font-medium uppercase tracking-widest text-stone-500 -mt-0.5">La preuve de l'origine</p>
          </div>
        </a>

        <!-- Menu Desktop (Caché sur Mobile) -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
          <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
              class="relative py-2 transition-colors duration-200 hover:text-emerald-800"
              :class="activeSection === item.id ? 'text-stone-900 font-bold' : 'text-stone-600'"
          >
            {{ item.label }}
            <span
                class="absolute left-0 bottom-0 h-[3px] bg-amber-400 rounded-full transition-all duration-300 ease-out"
                :class="activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'"
            ></span>
          </a>
        </nav>

        <!-- Actions Droite (Desktop & Mobile) -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Bouton Desktop : Tester -->
          <a
              href="#simulateur"
              @click.prevent="scrollToSection('simulateur')"
              class="hidden lg:inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-all duration-200"
          >
            Scanner un lot
          </a>

          <!-- Bouton Démo : compact sur mobile -->
          <a
              href="#contact"
              @click.prevent="scrollToSection('contact')"
              class="inline-flex items-center px-3 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-md shadow-sm transition-all duration-200"
          >
            <span class="sm:inline hidden">Solliciter un pilote</span>
            <span class="inline sm:hidden">Pilote</span>
          </a>

          <!-- Bouton Menu Burger Mobile -->
          <button
              type="button"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-emerald-800 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              aria-label="Menu principal"
          >
            <!-- Icône Burger / Fermeture -->
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Tiroir Mobile (Menu coulissant) -->
      <Transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl space-y-3">
          <nav class="flex flex-col space-y-1">
            <a
                v-for="item in navItems"
                :key="item.id"
                :href="`#${item.id}`"
                @click.prevent="navigateAndClose(item.id)"
                class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                :class="activeSection === item.id ? 'bg-amber-50 text-amber-900 font-bold border-l-4 border-amber-400' : 'text-stone-700 hover:bg-stone-50'"
            >
              <span>{{ item.label }}</span>
              <span v-if="activeSection === item.id" class="text-xs text-amber-600 font-bold">Actif</span>
            </a>
          </nav>

          <!-- Actions intégrées au menu mobile -->
          <div class="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
                @click="navigateAndClose('simulateur')"
                class="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-md"
            >
              Vérifier un QR Code / Lot
            </button>
          </div>
        </div>
      </Transition>
    </header>
    <!-- Hero Section -->
    <section id="hero" class="relative bg-white overflow-hidden border-b border-stone-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold tracking-wide">
              <span>🇧🇯</span>
              <span>Dossier de présentation institutionnel & investisseurs</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-stone-900 tracking-tight leading-[1.12]">
              La preuve de l'origine,<br/>
              <span class="text-emerald-800 underline decoration-amber-400 decoration-4 underline-offset-4">à chaque étape</span>.
            </h1>

            <p class="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed font-normal">
              CertiBénin est l'infrastructure numérique béninoise qui garantit la traçabilité intégrale, lutte contre la contrefaçon et certifie les filières d'excellence du <strong>Made in Benin</strong> sur les marchés locaux et internationaux.
            </p>

            <div class="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                  href="#simulateur"
                  @click.prevent="scrollToSection('simulateur')"
                  class="inline-flex justify-center items-center px-6 py-3.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-all duration-200 shadow hover:shadow-md"
              >
                Tester le parcours de traçabilité
              </a>
              <a
                  href="#contact"
                  @click.prevent="scrollToSection('contact')"
                  class="inline-flex justify-center items-center px-6 py-3.5 text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md border border-stone-300 transition-all duration-200"
              >
                Demander une réunion de cadrage
              </a>
            </div>

            <!-- Trois Piliers d'Impact -->
            <div class="grid grid-cols-3 gap-4 pt-8 border-t border-stone-200 text-stone-700">
              <div>
                <p class="text-2xl font-serif font-bold text-stone-900">100%</p>
                <p class="text-xs text-stone-500 font-medium mt-0.5">Origine vérifiable et horodatée</p>
              </div>
              <div class="border-l border-stone-200 pl-4">
                <p class="text-2xl font-serif font-bold text-emerald-800">QR Sécurisé</p>
                <p class="text-xs text-stone-500 font-medium mt-0.5">Identifiant unitaire infalsifiable</p>
              </div>
              <div class="border-l border-stone-200 pl-4">
                <p class="text-2xl font-serif font-bold text-amber-700">Export</p>
                <p class="text-xs text-stone-500 font-medium mt-0.5">Conformité aux normes internationales</p>
              </div>
            </div>
          </div>

          <!-- Panneau Visuel Réel : Photo Filière + Carte Lot -->
          <div class="lg:col-span-5 relative">
            <div class="relative bg-white rounded-xl border border-stone-300 shadow-xl overflow-hidden transition-transform duration-500 hover:-translate-y-1">
              <div class="h-56 w-full relative overflow-hidden bg-stone-100">
                <img
                    src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1000&q=80"
                    alt="Ananas du Bénin"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                  <div>
                    <span class="text-[10px] uppercase font-bold tracking-widest bg-emerald-800 text-white px-2 py-0.5 rounded">Filière Pilote</span>
                    <p class="font-serif font-bold text-base mt-1">Ananas Pain de Sucre d'Allada</p>
                  </div>
                  <span class="text-xs bg-stone-900/80 px-2 py-1 rounded text-stone-200 font-mono">Lot #BJ-2026-ANA-0492</span>
                </div>
              </div>

              <div class="p-6 bg-white space-y-4">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-xs font-semibold text-stone-500 uppercase tracking-wider">Producteur Vérifié</p>
                    <p class="font-bold text-stone-900 text-sm">Coopérative Maraîchère & Fruits d'Allada</p>
                  </div>
                  <span class="inline-flex items-center px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                    ✓ Conforme ABSSA
                  </span>
                </div>

                <div class="p-3.5 bg-[#FAF8F5] rounded border border-stone-200 text-xs space-y-2">
                  <div class="flex justify-between">
                    <span class="text-stone-500">Parcelle / Récolte</span>
                    <span class="font-medium text-stone-800">Zone Allada (Atlantique)</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-stone-500">Horodatage officiel</span>
                    <span class="font-medium text-stone-800">03 Octobre 2026 - 08:30</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-stone-500">Signature numérique</span>
                    <span class="font-mono text-emerald-900 font-bold">SHA-256 Validé</span>
                  </div>
                </div>

                <div class="pt-2">
                  <button
                      @click="searchLot = 'BJ-2026-ANA-0492'; runScan(); scrollToSection('simulateur')"
                      class="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors text-center"
                  >
                    Voir la traçabilité complète de ce lot
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- La Démarche -->
    <section id="demarche" class="section-reveal py-20 bg-[#F5F2EB] border-b border-stone-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <span class="text-emerald-900 font-bold uppercase tracking-widest text-xs">Le Problème & L'Enjeu</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-2">
            La confiance ne se décrète pas, elle se prouve.
          </h2>
          <p class="text-stone-600 mt-3 text-base leading-relaxed">
            Aujourd'hui, les marques béninoises de qualité peinent à attester rapidement de leur authenticité. Cette situation pénalise les producteurs vertueux, expose les acheteurs et freine l'expansion régionale et internationale.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg border border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 bg-red-100 text-red-800 rounded flex items-center justify-center font-bold text-xl mb-6">
              ✕
            </div>
            <h3 class="text-lg font-bold text-stone-900 mb-2">Contrefaçon & Fraude</h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              Les produits d'imitation et l'usurpation d'étiquettes dévalorisent le label Bénin et créent un manque à gagner direct pour les entrepreneurs locaux.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg border border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 bg-amber-100 text-amber-800 rounded flex items-center justify-center font-bold text-xl mb-6">
              !
            </div>
            <h3 class="text-lg font-bold text-stone-900 mb-2">Visibilité des Producteurs</h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              Les coopératives agricoles et artisans n'ont pas d'outil standardisé pour enregistrer et valoriser leur rigueur auprès des centrales d'achat.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg border border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 bg-emerald-100 text-emerald-800 rounded flex items-center justify-center font-bold text-xl mb-6">
              ✓
            </div>
            <h3 class="text-lg font-bold text-stone-900 mb-2">La Réponse CertiBénin</h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              Une passerelle numérique sobre, accessible et auditable, conçue en adéquation avec les autorités de régulation pour donner une voix certifiée aux produits béninois.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fonctionnement / Solution -->
    <section id="solution" class="section-reveal py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-emerald-900 font-bold uppercase tracking-widest text-xs">Mécanisme Opérationnel</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-2">
            Quatre étapes pour garantir l'intégrité
          </h2>
          <p class="text-stone-600 mt-3 text-sm">
            Un flux simple pensé pour le terrain : du champ au rayon du magasin.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="p-6 bg-[#FAF8F5] rounded-lg border border-stone-200 relative transition-transform duration-300 hover:-translate-y-1">
            <div class="text-3xl font-serif font-black text-emerald-900/20 mb-3">01</div>
            <h3 class="font-bold text-stone-900 text-base mb-2">Enregistrer</h3>
            <p class="text-stone-600 text-xs leading-relaxed">
              Le producteur ou la coopérative crée son profil validé et ouvre un nouveau lot de production avec ses coordonnées et ses preuves.
            </p>
          </div>

          <div class="p-6 bg-[#FAF8F5] rounded-lg border border-stone-200 relative transition-transform duration-300 hover:-translate-y-1">
            <div class="text-3xl font-serif font-black text-emerald-900/20 mb-3">02</div>
            <h3 class="font-bold text-stone-900 text-base mb-2">Marquer</h3>
            <p class="text-stone-600 text-xs leading-relaxed">
              Génération d'un identifiant unitaire sécurisé et d'un QR code infalsifiable à imprimer directement sur l'emballage.
            </p>
          </div>

          <div class="p-6 bg-[#FAF8F5] rounded-lg border border-stone-200 relative transition-transform duration-300 hover:-translate-y-1">
            <div class="text-3xl font-serif font-black text-emerald-900/20 mb-3">03</div>
            <h3 class="font-bold text-stone-900 text-base mb-2">Suivre</h3>
            <p class="text-stone-600 text-xs leading-relaxed">
              Chaque maillon habilité (contrôle sanitaire, stockage, transporteur) horodate son étape sans complexité technique.
            </p>
          </div>

          <div class="p-6 bg-[#FAF8F5] rounded-lg border border-stone-200 relative transition-transform duration-300 hover:-translate-y-1">
            <div class="text-3xl font-serif font-black text-emerald-900/20 mb-3">04</div>
            <h3 class="font-bold text-stone-900 text-base mb-2">Vérifier</h3>
            <p class="text-stone-600 text-xs leading-relaxed">
              Le client ou l'inspecteur scanne le code sur n'importe quel smartphone et consulte immédiatement les données publiques certifiées.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Simulateur Interactif -->
    <section id="simulateur" class="section-reveal py-20 bg-[#F5F2EB] border-b border-stone-200 scroll-mt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="bg-white rounded-xl border border-stone-300 shadow-md p-6 sm:p-10">

          <div class="text-center space-y-2 mb-8">
            <span class="text-emerald-900 font-bold uppercase tracking-widest text-[11px]">Démonstrateur en direct</span>
            <h2 class="text-2xl sm:text-3xl font-serif font-black text-stone-900">
              Vérifier l'authenticité d'un produit
            </h2>
            <p class="text-stone-600 text-xs sm:text-sm">
              Saisissez un numéro de lot officiel ou choisissez parmi nos filières d'évaluation.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <input
                v-model="searchLot"
                type="text"
                placeholder="Ex: BJ-2026-ANA-0492 ou BJ-KARITE-881"
                class="flex-1 px-4 py-3 bg-[#FAF8F5] rounded border border-stone-300 text-stone-900 font-mono text-sm focus:outline-none focus:border-emerald-800 focus:bg-white transition-colors"
            />
            <button
                @click="runScan"
                :disabled="loadingScan"
                class="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 disabled:bg-stone-400 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
            >
              <span v-if="loadingScan" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span v-else>Contrôler le lot</span>
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-2 mt-4 text-xs text-stone-500">
            <span class="font-medium">Lots pré-enregistrés :</span>
            <button @click="searchLot = 'BJ-2026-ANA-0492'; runScan()" class="text-emerald-800 font-bold hover:underline">
              Ananas Allada (Export)
            </button>
            <span>•</span>
            <button @click="searchLot = 'BJ-KARITE-881'; runScan()" class="text-emerald-800 font-bold hover:underline">
              Beurre de Karité Nikki
            </button>
            <span>•</span>
            <button @click="searchLot = 'BJ-MIEL-012'; runScan()" class="text-emerald-800 font-bold hover:underline">
              Miel Pur de la Donga
            </button>
          </div>

          <Transition name="fade-slide" mode="out-in">
            <div v-if="currentResult" :key="currentResult.code" class="mt-8 pt-8 border-t border-stone-200">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
                <div>
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Authentification Certifiée CertiBénin
                  </div>
                  <h3 class="text-2xl font-serif font-black text-stone-900">{{ currentResult.nom }}</h3>
                  <p class="text-xs font-mono text-stone-500">Identifiant Unique : {{ currentResult.code }}</p>
                </div>
                <div class="sm:text-right">
                  <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-stone-100 border border-stone-200 rounded text-stone-800">
                    {{ currentResult.grade }}
                  </span>
                </div>
              </div>

              <div class="grid sm:grid-cols-3 gap-4 my-6">
                <div class="p-3 bg-[#FAF8F5] rounded border border-stone-200">
                  <span class="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Origine</span>
                  <p class="font-bold text-stone-900 text-xs mt-0.5">{{ currentResult.lieu }}</p>
                  <p class="text-[11px] text-stone-600 mt-1">{{ currentResult.producteur }}</p>
                </div>

                <div class="p-3 bg-[#FAF8F5] rounded border border-stone-200">
                  <span class="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Norme & Conformité</span>
                  <p class="font-bold text-emerald-800 text-xs mt-0.5">{{ currentResult.norme }}</p>
                  <p class="text-[11px] text-stone-600 mt-1">{{ currentResult.organisme }}</p>
                </div>

                <div class="p-3 bg-[#FAF8F5] rounded border border-stone-200">
                  <span class="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Empreinte & Statut</span>
                  <p class="font-bold text-stone-900 text-xs mt-0.5">Scellé Numérique</p>
                  <p class="text-[11px] text-stone-600 mt-1 font-mono">MD5: {{ currentResult.hash }}</p>
                </div>
              </div>

              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Journal chronologique des jalons</h4>
                <div class="space-y-3 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-stone-200">
                  <div v-for="(etape, idx) in currentResult.etapes" :key="idx" class="flex items-start gap-4 relative">
                    <div class="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm z-10">
                      {{ idx + 1 }}
                    </div>
                    <div class="bg-[#FAF8F5] p-3 rounded border border-stone-200 w-full text-xs">
                      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span class="font-bold text-stone-900">{{ etape.titre }}</span>
                        <span class="text-stone-400 font-mono text-[11px]">{{ etape.date }}</span>
                      </div>
                      <p class="text-stone-600 mt-1">{{ etape.details }}</p>
                      <p class="text-[10px] text-emerald-800 font-medium mt-1">Opérateur : {{ etape.acteur }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Transition>

        </div>
      </div>
    </section>

    <!-- Filières Cibles Prioritaires -->
    <section id="filieres" class="section-reveal py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <span class="text-emerald-900 font-bold uppercase tracking-widest text-xs">Stratégie Territoriale</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-2">
            Filières prioritaires pour la phase pilote
          </h2>
          <p class="text-stone-600 text-sm mt-3 leading-relaxed">
            Pour maximiser l'impact économique, CertiBénin concentre son premier déploiement sur les produits à forte identité territoriale et à fort potentiel d'exportation.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="border border-stone-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1">
            <div class="h-48 overflow-hidden bg-stone-100">
              <img
                  src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=800&q=80"
                  alt="Filière Ananas Bénin"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Pilote Prioritaire N°1
                </span>
                <h3 class="font-serif font-bold text-xl text-stone-900 mt-2">Ananas Pain de Sucre</h3>
                <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                  Bassin d'Allada et de Zè. Sécurisation du label d'origine face aux marchés ouest-africains et européens.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Enjeu : Conformité résidus & traçabilité expédition
              </div>
            </div>
          </div>

          <div class="border border-stone-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1">
            <div class="h-48 overflow-hidden bg-stone-100">
              <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
                  alt="Transformation Karité"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Pilote Prioritaire N°2
                </span>
                <h3 class="font-serif font-bold text-xl text-stone-900 mt-2">Karité & Cosmétiques</h3>
                <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                  Borgou, Alibori, Atacora. Valorisation du travail des groupements de femmes transformatrices et labellisation équitable.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Enjeu : Garantie d'extraction pure et bio sans additifs
              </div>
            </div>
          </div>

          <div class="border border-stone-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1">
            <div class="h-48 overflow-hidden bg-stone-100">
              <img
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
                  alt="Apiculture et Miel"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                  Phase d'Extension
                </span>
                <h3 class="font-serif font-bold text-xl text-stone-900 mt-2">Miel Pur & Noix de Cajou</h3>
                <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                  Zone des Collines et Nord Bénin. Protection contre le frelatage du miel et valorisation de la transformation locale de l'anacarde.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Enjeu : Vérification de pureté et soutien aux transformateurs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- La Fondatrice & Gouvernance -->
    <section id="fondatrice" class="section-reveal py-20 bg-[#FAF8F5] border-b border-stone-200 scroll-mt-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="bg-white rounded-xl border border-stone-200 p-8 sm:p-12 shadow-sm">
          <div class="grid md:grid-cols-12 gap-8 items-center">

            <div class="md:col-span-4 text-center md:text-left">
              <div class="w-32 h-32 mx-auto md:mx-0 rounded-full bg-emerald-900 text-amber-200 flex items-center justify-center font-serif text-4xl font-bold shadow border-4 border-white">
                VK
              </div>
              <h3 class="font-serif font-bold text-xl text-stone-900 mt-4">Véronique KINDE</h3>
              <p class="text-xs text-emerald-800 font-bold uppercase tracking-wider mt-0.5">Fondatrice & Porteuse du projet</p>
              <p class="text-xs text-stone-500 mt-1">Cotonou, République du Bénin</p>
            </div>

            <div class="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-stone-200 pt-6 md:pt-0 md:pl-8">
              <h4 class="font-serif text-xl font-bold text-stone-900">
                « Construire une infrastructure fiable pour protéger le labeur de nos producteurs et sublimer le Made in Benin. »
              </h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                Le rôle de la fondatrice est de fédérer l'ensemble des parties prenantes : autorités publiques (ministères, agences de normalisation), coopératives agricoles, transformateurs et partenaires financiers pour ancrer une solution pérenne, souveraine et créatrice de valeur locale.
              </p>
              <div class="pt-2 flex flex-wrap gap-4 text-xs text-stone-500 font-medium">
                <span class="inline-flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Gouvernance claire et déclarée
                </span>
                <span class="inline-flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Respect strict de la législation APDP
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire Contact -->
    <section id="contact" class="section-reveal py-24 bg-white scroll-mt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-emerald-900 font-bold uppercase tracking-widest text-xs">Cadrage & Partenariats</span>
          <h2 class="text-3xl font-serif font-black text-stone-900 mt-2">
            Engager une réunion de travail
          </h2>
          <p class="text-stone-600 text-sm mt-2">
            Vous représentez une institution, une coopérative, un industriel ou un fonds d'accompagnement ? Définissons ensemble les contours d'un pilote adapté.
          </p>
        </div>

        <form @submit.prevent="submitForm" class="bg-[#FAF8F5] p-8 sm:p-10 rounded-xl border border-stone-300 space-y-5 shadow-sm">
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">Nom et Prénom</label>
              <input
                  v-model="contactForm.nom"
                  required
                  type="text"
                  placeholder="Ex: Véronique KINDE"
                  class="w-full px-4 py-3 bg-white rounded border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 transition-colors"
              />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">Structure ou Institution</label>
              <input
                  v-model="contactForm.organisation"
                  required
                  type="text"
                  placeholder="Ex: Ministère, Coopérative, Entreprise..."
                  class="w-full px-4 py-3 bg-white rounded border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 transition-colors"
              />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">Adresse E-mail</label>
              <input
                  v-model="contactForm.email"
                  required
                  type="email"
                  placeholder="votre-adresse@domaine.bj"
                  class="w-full px-4 py-3 bg-white rounded border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 transition-colors"
              />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">Objet de l'échange</label>
              <select
                  v-model="contactForm.objet"
                  class="w-full px-4 py-3 bg-white rounded border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 transition-colors">
                <option value="pilote">Intégration au programme pilote filière</option>
                <option value="institution">Appui institutionnel & alignement réglementaire</option>
                <option value="financement">Investissement & Partenariat technique</option>
                <option value="demo">Demande de démonstration privée</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">Message ou périmètre souhaité</label>
            <textarea
                v-model="contactForm.message"
                rows="4"
                placeholder="Précisez votre filière, volume ou objectifs attendus..."
                class="w-full px-4 py-3 bg-white rounded border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-emerald-800 transition-colors"
            ></textarea>
          </div>

          <button
              type="submit"
              class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest rounded transition-colors shadow">
            {{ buttonStatus }}
          </button>
        </form>
      </div>
    </section>

    <!-- Pied de Page Institutionnel -->
    <footer class="bg-stone-950 text-stone-400 py-16 border-t border-stone-800 text-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          <div class="md:col-span-6 space-y-3">
            <div class="flex items-center gap-2 text-white font-serif text-xl font-bold">
              <span>Certi<span class="text-emerald-500">Bénin</span></span>
            </div>
            <p class="max-w-md text-stone-400 text-xs leading-relaxed">
              Solution technologique béninoise de traçabilité, de protection contre la contrefaçon et d'authentification des produits locaux. Conçue pour valoriser la production nationale auprès du monde entier.
            </p>
          </div>

          <div class="md:col-span-3 space-y-2">
            <p class="font-bold text-white uppercase tracking-wider text-[11px]">Gouvernance</p>
            <p>Fondatrice : <strong>Véronique KINDE</strong></p>
            <p>Siège : Cotonou, Bénin</p>
            <p>Statut : Phase Pilote & Cadrage 2026</p>
          </div>

          <div class="md:col-span-3 space-y-2">
            <p class="font-bold text-white uppercase tracking-wider text-[11px]">Conformité</p>
            <p>Aligné sur les recommandations ANOR & ABSSA</p>
            <p>Protection des données sensibles (APDP Bénin)</p>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© 2026 CertiBénin. Tous droits réservés.</p>
          <p>La preuve de l'origine, à chaque étape.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// État du menu mobile
const isMobileMenuOpen = ref(false)

// Navigation fluide et fermeture du volet sur mobile
const navigateAndClose = (id) => {
  isMobileMenuOpen.value = false
  scrollToSection(id)
}

// Liste des sections pour la navbar
const navItems = [
  { id: 'demarche', label: 'La Démarche' },
  { id: 'solution', label: 'Fonctionnement' },
  { id: 'simulateur', label: 'Démonstrateur' },
  { id: 'filieres', label: 'Filières & Impact' },
  { id: 'fondatrice', label: 'Gouvernance' }
]

const activeSection = ref('')
const searchLot = ref('BJ-2026-ANA-0492')
const loadingScan = ref(false)
const buttonStatus = ref('Transmettre la demande de réunion')

const contactForm = ref({
  nom: '',
  organisation: '',
  email: '',
  objet: 'pilote',
  message: ''
})

// Défilement animé sur mesure vers une section
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const navHeight = 80 // hauteur du header fixe
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    activeSection.value = id
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  activeSection.value = ''
}

// Données du simulateur
const baseDonneesLots = {
  'BJ-2026-ANA-0492': {
    code: 'BJ-2026-ANA-0492',
    nom: "Ananas Pain de Sucre d'Allada",
    grade: 'Export Grade A',
    producteur: 'Coopérative Maraîchère & Fruits d\'Allada',
    lieu: 'Allada, Département de l\'Atlantique (Bénin)',
    norme: 'Conforme ABSSA #2026-A1',
    organisme: 'Inspection Phytosanitaire & CertiBénin',
    hash: 'a9f24e781bc091',
    etapes: [
      { titre: 'Récolte certifiée à maturité', date: '29 Septembre 2026', details: 'Parcelle N°14 - Cueillette manuelle sous cahier des charges', acteur: 'Groupement Producteurs Allada' },
      { titre: 'Contrôle qualité & triage', date: '30 Septembre 2026', details: 'Vérification du taux de brix et calibrage unitaire', acteur: 'Station Régionale de Triage' },
      { titre: 'Marquage sécurisé & scellé QR', date: '01 Octobre 2026', details: 'Génération du lot unique et apposition sur caisse export', acteur: 'Opérateur CertiBénin Agréé' },
      { titre: 'Conditionnement & Expédition', date: '03 Octobre 2026', details: 'Enregistrement logistique avant départ vers le réseau de distribution', acteur: 'Transporteur Logistique Bénin' }
    ]
  },
  'BJ-KARITE-881': {
    code: 'BJ-KARITE-881',
    nom: 'Beurre de Karité Traditionnel Brut',
    grade: 'Qualité Supérieure Non Raffinée',
    producteur: 'Union des Femmes Transformatrices de Nikki',
    lieu: 'Nikki, Département du Borgou (Bénin)',
    norme: 'Norme Béninoise Karité NB-04',
    organisme: 'Contrôle Sanitaire & Filière Karité',
    hash: '88c1b4390ea12f',
    etapes: [
      { titre: 'Ramassage des noix sélectionnées', date: '12 Août 2026', details: 'Collecte responsable en parcs agroforestiers naturels', acteur: 'Collectrices Communales Nikki' },
      { titre: 'Barattage traditionnel à froid', date: '18 Août 2026', details: 'Procédé artisanal sans solvant chimique', acteur: 'Atelier Central Union Nikki' },
      { titre: 'Certification du lot & Marquage', date: '25 Septembre 2026', details: 'Attestation de pureté et enregistrement dans le registre', acteur: 'Superviseur Qualité CertiBénin' }
    ]
  },
  'BJ-MIEL-012': {
    code: 'BJ-MIEL-012',
    nom: 'Miel Pur Sauvage de la Donga',
    grade: 'Miel 100% Naturel Pur',
    producteur: 'Réseau des Apiculteurs des Monts Kouffé',
    lieu: 'Bassila, Département de la Donga (Bénin)',
    norme: 'Certificat Origine & Pureté',
    organisme: 'Direction Départementale Agriculture',
    hash: '55d8a01124cf67',
    etapes: [
      { titre: 'Récolte apicole durable', date: '05 Juillet 2026', details: 'Prélèvement sans destruction de ruches en milieu boisé', acteur: 'Groupement Apicole Donga' },
      { titre: 'Filtration mécanique & décantation', date: '10 Juillet 2026', details: 'Filtration pure sans pasteurisation ni ajout de sucre', acteur: 'Miellerie Pilote Bassila' },
      { titre: 'Mise en bocal scellée', date: '14 Septembre 2026', details: 'Étiquetage sécurisé avec QR code unitaire', acteur: 'Poste CertiBénin' }
    ]
  }
}

const currentResult = ref(baseDonneesLots['BJ-2026-ANA-0492'])

const runScan = () => {
  loadingScan.value = true
  setTimeout(() => {
    const code = searchLot.value.trim().toUpperCase()
    if (baseDonneesLots[code]) {
      currentResult.value = baseDonneesLots[code]
    } else {
      currentResult.value = {
        code: code,
        nom: `Lot Référencé (${code})`,
        grade: 'Standard Vérifié',
        producteur: 'Producteur Certifié de la République du Bénin',
        lieu: 'République du Bénin',
        norme: 'Enregistrement Officiel',
        organisme: 'Registre Décentralisé CertiBénin',
        hash: 'b17ef49021da63',
        etapes: [
          { titre: 'Initialisation du lot', date: 'Horodatage Récent', details: 'Création de l\'identifiant dans le registre sécurisé', acteur: 'Système CertiBénin' }
        ]
      }
    }
    loadingScan.value = false
  }, 350)
}

const submitForm = () => {
  buttonStatus.value = 'Transmission en cours...'
  setTimeout(() => {
    alert(`Merci ${contactForm.value.nom}. Votre demande pour ${contactForm.value.organisation} a bien été enregistrée. Nous prendrons contact avec vous très rapidement.`)
    contactForm.value = { nom: '', organisation: '', email: '', objet: 'pilote', message: '' }
    buttonStatus.value = 'Transmettre la demande de réunion'
  }, 500)
}

let observer = null
let revealObserver = null

onMounted(() => {
  // 1. Détection de la section active pour le soulignement jaune dans la barre de navigation
  const sectionIds = ['hero', ...navItems.map(item => item.id), 'contact']
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id !== 'hero') {
          activeSection.value = entry.target.id
        } else {
          activeSection.value = ''
        }
      }
    })
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0.1
  })

  sections.forEach(s => observer.observe(s))

  // 2. Animation d'apparition au défilement (Scroll Reveal)
  const revealElements = document.querySelectorAll('.section-reveal')
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        revealObserver.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.08
  })

  revealElements.forEach(el => revealObserver.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style scoped>

/* Animation d'ouverture du menu mobile */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Transition douce pour le résultat de scan */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Transitions discrètes et élégantes d'apparition des sections au scroll */
.section-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.section-reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
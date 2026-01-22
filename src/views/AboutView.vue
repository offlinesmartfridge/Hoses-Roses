<template>
  <div class="about-page">

    <section class="about-hero">
      <h1>O nás</h1>
      <p>Keď obyčaj nestačí, obráťte sa na nás. My nikdy nesklameme.</p>
    </section>


    <section class="about-section">
      <h2>Kto sme?</h2>
      <p>
        Sme kolektív biológov, majstrov kováčov a chemikov, ktorý poznajú pravý zmysel života. Luxusná záhrada je prvý krok ku vášmu prebudeniu.
      </p>
      <p>
        Nebudeme vás presviečať o našej kvalite. Ak nie ste pripravený obetovať všetko pre vašu záhradu, nidky nebudete jeden z nás.
      </p>
    </section>


    <section class="about-section">
      <h2>Naše hodnoty</h2>
      <div class="features">
        <FeatureCard
          icon="🌱"
          title="Pravda"
          description="Ľudia klamú, stroje vás zradia. Kvety nikdy."
        />
        <FeatureCard
          icon="♻️"
          title="Cyklus života"
          description="Všetko čo robíme pomáha prírode, nič nie je vymrhané."
        />
        <FeatureCard
          icon="💚"
          title="Láska k prírode"
          description="U nás sa kvety majú lepšie ako väčšina ľudstva."
        />
        <FeatureCard
          icon="🚚"
          title="Bezpečné dodanie"
          description="Nezáleží či ste na osamelom ostrove alebo v strede bojiska, vaša objednávka príde v bezpečí."
        />
      </div>
    </section>


    <section class="about-section">
      <h2>Čo ponúkame</h2>
      <div class="category-grid">
        <CategoryCard
          title="Semená a sadboviny"
          categoryId="semena"
          @click="goToCategory"
        />
        <CategoryCard
          title="Záhradné náradie"
          categoryId="naradie"
          @click="goToCategory"
        />
        <CategoryCard
          title="Hnojivá a substráty"
          categoryId="hnojiva"
          @click="goToCategory"
        />
        <CategoryCard
          title="Ochrana rastlín"
          categoryId="ochrana"
          @click="goToCategory"
        />
      </div>
    </section>


    <section class="about-section about-contact">
      <h2>Kontaktujte nás</h2>
      <div class="contact-grid">
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <div>
            <h4>Adresa</h4>
            <p>Pravda sa ukáže keď sa zobudíte a uvidíte realitu života</p>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <div>
            <h4>Telefón</h4>
            <p>+421 123 456 789</p>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📧</span>
          <div>
            <h4>Email</h4>
            <p>info@roseshoses.plant</p>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">🕐</span>
          <div>
            <h4>Otváracie hodiny</h4>
            <p>Keď nás potrebujete, vždy budeme dostupný</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section about-cta">
      <h2>Začnite vaše osvietenie už dnes.</h2>
      <p>Urobte z vašej záhrady raj</p>
      <button class="btn-primary" @click="goToProducts">
        Prejsť na produkty
      </button>
    </section>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue'
import CategoryCard from '../components/CategoryCard.vue'

export default {
  name: 'AboutView',
  components: {
    FeatureCard,
    CategoryCard
  },
  methods: {
    goToCategory(categoryId) {
      this.$router.push({ 
        name: 'products', 
        query: { category: categoryId } 
      })
    },
    goToProducts() {
      this.$router.push({ name: 'products' })
    }
  }
}
</script>
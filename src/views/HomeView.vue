<template>
  <div class="home">
    <section class="hero">
      <h1>Roses&Hoses</h1>
      <p>Luxusné produkty pre luxusnú záhradu</p>
      <button class="btn-primary" @click="scrollToProducts">Prezrieť produkty</button>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="icon">🌱</div>
        <h3>Najvyššia kvalita semien</h3>
        <p>Lebo nič menej nestačí</p>
      </div>
      <div class="feature-card">
        <div class="icon">🛠️</div>
        <h3>Náradie</h3>
        <p>Profesionály vám budú závidieť</p>
      </div>
      <div class="feature-card">
        <div class="icon">🚚</div>
        <h3>Bezpečné dodanie</h3>
        <p>Vaše rastliny sú v bezpečí</p>
      </div>
      <div class="feature-card">
        <div class="icon">💰</div>
        <h3>Kvalita je priorita</h3>
        <p>Prémiové ceny, prémiová kvalita</p>
      </div>
    </section>

    <section class="categories">
      <h2>Kategórie produktov</h2>
      <div class="category-grid">
        <div class="category-item" @click="goToCategory('semena')">
          <h3>Semená a sadboviny</h3>
        </div>
        <div class="category-item" @click="goToCategory('naradie')">
          <h3>Záhradné náradie</h3>
        </div>
        <div class="category-item" @click="goToCategory('hnojiva')">
          <h3>Hnojivá a substráty</h3>
        </div>
        <div class="category-item" @click="goToCategory('ochrana')">
          <h3>Ochrana rastlín</h3>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <h2>Prihláste sa na newsletter</h2>
      <p>Vaša záhrada vám poďakuje</p>
      <div class="newsletter-form">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Váš email"
          @keyup.enter="subscribeNewsletter"
        >
        <button @click="subscribeNewsletter" class="btn-primary">Prihlásiť</button>
      </div>
      <p v-if="subscribed" class="success-message">Ďakujeme za prihlásenie!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      email: '',
      subscribed: false
    }
  },
  methods: {
    scrollToProducts() {
      this.$router.push({ name: 'products' });
    },
    goToCategory(category) {
      this.$router.push({ 
        name: 'products', 
        query: { category: category } 
      });
    },
    subscribeNewsletter() {
      if (this.email && this.email.includes('@')) {
        this.subscribed = true;
        setTimeout(() => {
          this.subscribed = false;
          this.email = '';
        }, 3000);
      }
    }
  }
}
</script>
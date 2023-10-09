import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import QuestionView from '../views/QuestionView.vue'
import VisualQuestion from '../views/VisualQuestions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'formView',
      component: FormView
    },
    {
      path: '/questionView',
      name: 'QuestionView',
      component: QuestionView
    },
    {
      path: '/visualquestionView',
      name: 'VisualQuestionView',
      component: VisualQuestion
    }
  ]
})

export default router

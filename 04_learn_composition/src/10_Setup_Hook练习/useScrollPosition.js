import { ref, watch } from 'vue'

export default function returnScroll() {
    const scrollY = ref(0)
    
    document.addEventListener('scroll', () => {
        scrollY.value = window.scrollY
    })
    
    return { scrollY }
}
import Vue, { ref, computed, reactive} from 'vue'

export default function () {

    // const db = reactive([])
    const count = ref(0)
    let countDeux = 2

    const incrementCount = () => {
        countDeux++
        console.log(count)
        count.value++
    }

    const countDouble = computed(() => {
        return count.value * 2
    })

    return {
        count, incrementCount, countDouble, countDeux
    }
}

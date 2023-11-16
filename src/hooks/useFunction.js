import { ref } from "vue"


export default function useFunction() {
    const data = ref('')    
    const getData = (fn) => {
        fn().then(res => {
            data.value = res
            console.log(data)
            //doSomething..
        })
    }
    return { getData }
}

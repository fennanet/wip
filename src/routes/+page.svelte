<script>
    import { invoke } from "@tauri-apps/api/core";

    let name = $state("");
    let greetMsg = $state("");

    async function greet(event) {
        event.preventDefault();
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        greetMsg = await invoke("greet", { name });
    }
</script>

<main class="container">
    <h1>crusty</h1>
    <p><i>your n#1 favorite screenwriting program</i></p>

    <button>new</button>
    <button>load</button>
    <p>recent screenplays:</p>
    <ul class="recents">
        <li>quan millz <button>load</button> </li>
        <li>water and wine brite <button>load</button> </li>
        <li>mom found pubes in my bed!!! <button>load</button> </li> 
    </ul>
</main>

<style>
    main{
        padding: 0;
        margin: 0;
        height: 100vh;
        text-align: center;
        background-color: black;
        color: white;
    }
    
    .recents li{
        display: flex;
        justify-content: space-between;
    }

    .recents li button {
        text-align: right;
        margin-right: 20vh;
    }
</style>

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
    <h1>WIP WRITER</h1>
    <p><i>your n#1 favorite screenwriting program</i></p>
    <div class="new_load">
        <button>new</button>
        <button>load</button>
    </div>
    <div class="recent">
        <p>recent screenplays:</p>
        <ul class="recents">
            <li>This Hoe Got Roaches In Her Crib<button>load</button></li>
            <li>This Hoe Eats Chitlins<button>load</button></li>
            <li>Pregnant By My Gay Stepdaddy<button>load</button></li>
        </ul>
    </div>
</main>

<style>
    h1 {
        margin-top: 0;
        padding-top: 5vh;
    }

    :root {
        --bg-color: #0c0c0c;
        --accent-color-dark: #481e14;
        --accent-color-light: #9b3922;
        --text-color: #f2613f;
    }

    main {
        padding: 0;
        margin: 0;
        height: 100vh;
        text-align: center;
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: Inter;
    }

    button {
        background-color: var(--accent-color-dark);
        color: var(--text-color);
        border: 0;
        border-radius: 10%;
        margin: 0.5vb;
        margin-right: 2vb;
    }

    button:hover {
        background-color: var(--accent-color-light);
    }

    .recents {
        padding: 0;
    }

    .recents li {
        display: flex;
        justify-content: space-between;
    }

    .recents li button {
        text-align: right;
    }

    .recent {
        background-color: var(--accent-color-dark);
        border-radius: 1vb;
        width: 100vb;
        margin: auto;
        padding-block: 1vb;
        padding-inline: 5vb;
        margin-top: 5vh;
        border-style: dashed;
        border-width: 0.5vb;
    }

    .recent button {
        background-color: var(--accent-color-light);
        margin-right: 0;
    }

    .recent button:hover {
        background-color: var(--text-color);
        color: var(--accent-color-dark);
    }
    

</style>

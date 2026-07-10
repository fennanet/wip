<script>
    import { invoke } from "@tauri-apps/api/core";

    let opening = false;
    
    function open_new() {
      if (opening) return;
      opening = true;
      invoke("new_window")
        .catch((err) => console.error("Failed to open new project:", err))
        .finally(() => { opening = false; });
    }
</script>

<main class="container">
    <h1>WIP WRITER</h1>
    <p><i><span id="shake">your</span> n#1 favorite screenwriting program</i></p>
    <div class="new_load">
        <button onclick={open_new}>new</button>
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
        margin-bottom: 0;
        padding-bottom: 0;
        padding-top: 5vh;
    }

    p {
        margin-top: 2vh;
        margin-bottom: 4vh;
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

    
    @keyframes tilt-shake{
      0%{ transform: translateX(0) rotate(0deg); }
      25%{ transform: translateX(-2px) rotate(-2deg); }
      50%{ transform: translateX(2px) rotate(2deg); }
      75%{ transform: translateX(-2px) rotate(-2deg); }
      100%{ transform: translateX(0) rotate(0deg); }
    }

    #shake{
      display: inline-block;
    }
    
    #shake:hover {
          animation: tilt-shake .30s infinite;
          font-weight: bold;
          font-size: large;
    }

    
</style>

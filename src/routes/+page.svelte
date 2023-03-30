<script>
  import "@fontsource/inter";
  import "@fontsource/noto-sans-jp";
  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<svelte:head>
  <title>Home - Librewave</title>
</svelte:head>

<section class="text-center">
  <div class="my-20 mx-auto max-w-5xl px-4 md:px-8">
    <h1 class="text-white md:text-7xl text-5xl font-bold mb-7 tracking-wide">
      Building the New<br />Open Web
    </h1>
    <p class="text-gray-300 mb-8">
      Librewave is an open-source community dedicated to creating a new, open
      web that challenges the dominance of Big Tech companies.
    </p>
    <div class="md:flex justify-center">
      <a
        href="https://github.com/librewave"
        class="bg-white px-4 text-sm py-2 rounded-md font-bold  mb-4 md:mb-0 md:mr-4 flex items-center"
      >
        <Fa icon={faGithub} size="1.8x" class="mr-2" />
        Contribute on GitHub
      </a>
      <a
        href="/code-of-conduct"
        class="flex text-sm rounded-md bg-white px-4 py-2 items-center font-bold"
      >
        <img
          class="mr-2 h-7 w-7"
          src="https://cdn.jsdelivr.net/gh/shuding/fluentui-emoji-unicode/assets/%E2%9D%A4%EF%B8%8F_color.svg"
          alt="Hert"
        />
        Code of Conduct
      </a>
    </div>
  </div>
</section>
<section class="my-20 text-center">
  <div class="my-20 mx-auto max-w-5xl px-4 md:px-8">
    <h2 class="text-4xl text-white font-bold mb-5">Open Source</h2>
    <p class="text-gray-300">
      Our mission is to foster innovation, collaboration, and knowledge sharing,
      while empowering individuals and developers across the globe. By embracing
      the principles of open-source development, we aim to decentralize the web
      and create a more accessible, transparent, and secure digital ecosystem
      for everyone.
    </p>
  </div>
</section>

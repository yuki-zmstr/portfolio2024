export default function Footer() {
    return (
        <>
            <p>
                This project is built using React with <a href="https://vitejs.dev/" target="_blank">Vite</a>.
                I started out using&nbsp;
                <a href="https://astro.build/" target="_blank">Astro</a>, a JavaScript-based static site generator. Astro projects are component-based simliar to React, though by default components are rendered on the server, and the user will be delivered content in HTML.

                On the flip side it doesn't offer client-side interaction, such as access to the <code>DOM</code> or <code>window</code>. It seems that Astro (as described in their website) is designed for content-heavy websites with multiple pages to display, such as blogs, and may not have been the best choice for this project.

                To achieve the SPA experience, I ultimately chose React. At the least I got to understand what Astro is trying to achieve compared to SPA frameworks. The source code for this project can be found&nbsp;
                <a href="https://github.com/yuki-zmstr/portfolio2024" target="_blank">here</a>.
            </p>
            <p>Previous Websites:&nbsp;
                <a href="https://yuki-zmstr.github.io/en/" target="_blank" >version 1</a>
                &nbsp;&nbsp;
                <a href="https://yuki-zmstr.github.io/portfolio2022/" target="_blank" >version 2</a>
            </p>
            <p>&copy; Yukihide Takahashi 2024</p>
        </>)
}


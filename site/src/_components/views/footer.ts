export const css = `
footer {
    margin-top: auto;
    text-wrap: nowrap;
    padding: 40px 0 30px 0;
    grid-area: footer;
}

.footer-container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px 50px;
    grid-template-areas:
        'icons'
        'footer-text';
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
}

.texts-container {
    grid-area: footer-text;
}

.icons-container {
    grid-area: icons;
}

div.icons-container > a > i {
    font-size: 1.75rem;
    padding: 2px;
}
`;

export default function (): string {
    const now = new Date();
    return `
<footer class="container-fluid footer-container">
    <div class="icon-container">
    </div>
    <div class="texts-container">
		<small>
			&#169; ${now.getUTCFullYear()} Moss Pakhapoca. All right reserved.
		</small>
	</div>
</footer>
`;
}

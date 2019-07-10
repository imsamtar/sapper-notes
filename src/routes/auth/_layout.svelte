<style>
    section {
        max-width: 768px;
        margin: 0 auto;
        min-height: 500px;
    }
    section > * {
        padding: 10px;
    }
    section > h1 {
        border-radius: 6px 6px 0 0;
        background: white;
        text-align: center;
    }
    section > div {
        margin: 0 auto;
        width: 100%;
    }
</style>

<section>
    <h1>Authentication</h1>
    <div>
        <slot></slot>
    </div>
</section>
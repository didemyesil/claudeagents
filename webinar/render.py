import asyncio, pathlib
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium') if pathlib.Path('/opt/pw-browsers/chromium').is_file() else await p.chromium.launch()
        pg = await b.new_page(viewport={'width':1920,'height':1080})
        await pg.goto(pathlib.Path('prompting-vs-agents.html').resolve().as_uri())
        await pg.evaluate('document.fonts.ready')
        print(await pg.evaluate('''[...document.fonts].map(f=>f.family+" "+f.weight+" "+f.status).join("\\n")'''))
        print(await pg.evaluate('''JSON.stringify({ov:[...document.querySelectorAll('.cell,.label')].filter(e=>e.scrollHeight>e.clientHeight+1).length, h:document.querySelector('.slide').scrollHeight})'''))
        await pg.screenshot(path='prompting-vs-agents.png')
        await b.close()
asyncio.run(main())

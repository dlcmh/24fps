import { execute24TimesPerSecond } from 'src/execute24TimesPerSecond'
import { appendFileSync, writeFileSync } from 'fs'

test('appends to file', async () => {
  const file = 'test/scratch/sample.txt'
  const start = new Date().getTime()

  writeFileSync(file, String(`start: ${start}\n`), 'utf8')

  await execute24TimesPerSecond(() => {
    const end = new Date().getTime()
    const duration = end - start

    appendFileSync(file, String(`end:   ${end}\n`), 'utf8')
    appendFileSync(file, String(`duration: ${duration}\n`), 'utf8')
  })
})

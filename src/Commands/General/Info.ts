import { join } from 'path'
import { BaseCommand, Command, Message } from '../../Structures'

@Command('Bugged', {
    description: "Displays bot's info",
    usage: 'information2006',
    category: 'general',
    cooldown: 5,
    exp: 25000
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const { description, name, homepage } = require(join(__dirname, '..', '..', '..', 'package.json')) as {
            description: string
            homepage: string
            name: string
        }
        const image = this.client.assets.get('whatsapp-bot') as Buffer
        const uptime = this.client.utils.formatSeconds(process.uptime())
        const text = `🌟 *WhatsApp-bot* 🌟\n\n📙 *Description: ${description}*\n\n🔗 *Commands:* ${this.handler.commands.size}\n\n🚦 *Uptime:* ${uptime}`
        return void (await reply(image, 'image', undefined, undefined, text, undefined, {
            title: this.client.utils.capitalize(name),
            thumbnail: image,
            mediaType: 1,
            sourceUrl: homepage
        }))
    }
}

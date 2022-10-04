import { Message, Command, BaseCommand } from '../../Structures'

@Command('mods', {
    description: "Displays the bot's moderators",
    exp: 20,
    cooldown: 5,
    dm: true,
    category: 'general',
    usage: 'mods',
    aliases: ['mod', 'owner', 'moderators']
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        if (!this.client.config.mods.length) return void reply('*[UNMODERATED]*')
        let text = `ᴀɴᴏ~ɴᴇ ᴍʏ ᴏᴡɴᴇʀ ɪꜱ * 🖤\n`
        for (let i = 0; i < this.client.config.mods.length; i++)
            text += `\n*#${i + 1}*\n🎐 *ᴏᴡɴᴇʀ:* ${
                this.client.contact.getContact(this.client.config.mods[i]).username
            }\n🔗 *Contact: https://wa.me/+${this.client.config.mods[i].split('@')[0]}*`
        return void (await reply(text))
    }
}

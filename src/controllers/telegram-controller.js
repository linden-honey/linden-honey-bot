class TelegramController {
    constructor({ bot }) {
        this.bot = bot
    }

    handleUpdate = async (req, res) => {
        if (req.is('json')) {
            const { body } = req
            this.bot.handleUpdate(body, res)
            res.status(201).send('Telegram update has been successfully handled')
        } else {
            res.status(415).send('Incorrect update format')
        }
    }
}

module.exports = TelegramController

const inputPrompt = require("../models/input-prompt")
const openai = require("../configs/openai")

module.exports = {
	async sendText(req, res) {
	  const openaiAPI = openai.configuration();
	  const inputModel = new inputPrompt(req.body);
  
	  try {
		const response = await openaiAPI.createChatCompletion({
		  model: "gpt-3.5-turbo",
		  messages: [{
			role: "user",
			content: inputModel.prompt
		  }],
		  temperature: 1,
		  max_tokens: 256,
		  top_p: 1,
		  frequency_penalty: 0,
		  presence_penalty: 0,
		});
  
		return res.status(200).json({
		  success: true,
		  data: response.data.choices[0].message.content // Ajuste para a resposta esperada de Chat completions
		});
  
	  } catch (error) {
		return res.status(400).json({
		  success: false,
		  error: error.response ? error.response.data : 'There was an issue on the server'
		});
	  }
	}
  }
  
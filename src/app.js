module.exports.hello = async (event, context) => {
    return {
      body: JSON.stringify({ message: "teste Serverless" }),
      headers: { "Content-Type": "application/json" },
    };
};
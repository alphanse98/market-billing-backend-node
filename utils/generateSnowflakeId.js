const SnowflakeID = require("snowflake-id").default;

const snowflake = new SnowflakeID({
  mid: 567,
  offset: new Date("2020-01-01T00:00:00Z").getTime(),
});

function generateSnowflakeID() {
  try {
    return snowflake.generate().toString();
  } catch (error) {
    console.error("Failed to generate Snowflake ID:", error);
    return null;
  }
}

module.exports = generateSnowflakeID;

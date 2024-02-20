export default defineEventHandler(async (event) => {
    console.log("서버 미들웨어 실행...")
    const body = await readBody(event);
    console.log(body)
    setResponseStatus(event, 200)
    return {
        message: "성공"
    }
})
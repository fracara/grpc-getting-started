let grpc = require('@grpc/grpc-js')

let services = require('./proto_build/blog_grpc_pb')
let messages = require('./proto_build/blog_pb')

const serverHost = 'localhost'
const serverPort = '50051'

function main() {
    //Create grpc client
    let client = new services.BlogPostServiceClient(
        `${serverHost}:${serverPort}`,
        grpc.credentials.createInsecure()
    )
    //Create request for rpc method
    let request = new messages.GetOneRequest()
    request.setPostId(1)
    //Call rpc method
    client.getOne(request, getOneRequestHandler)
}

function getOneRequestHandler(err, response) {
    if (response) {
        let author = {
            firstName: response.getAuthor().getFirstName(),
            lastName: response.getAuthor().getLastName()
        }

        let post = {
            title: response.getPost().getTitle(),
            description: response.getPost().getDescription(),
            content: response.getPost().getContent(),
            tags: response.getPost().getTagsList()
        }

        console.log(author);
        console.log(post);
    }
}

main()

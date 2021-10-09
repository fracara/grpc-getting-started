from proto_build.blog_pb2_grpc import BlogPostServiceServicer
from proto_build.blog_pb2 import Author, BlogPost, GetOneRequest, GetOneResponse

class BlogPostUseCase(BlogPostServiceServicer):

    def GetOne(self, request: GetOneRequest, context) -> GetOneResponse:
        # Fetch Data from repository and create response messages
        post =BlogPost(
                title="gRPC is very fast",
                description="Using gRPC for micro services communications",
                content="gRPC ...",
                tags=["gRPC","backend","micro services"]
            )
        author = Author(first_name="Frank",last_name="Cara")
        return GetOneResponse(post=post,author=author)


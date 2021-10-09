from proto_build.blog_pb2_grpc import BlogPostServiceServicer
from proto_build.blog_pb2 import Author, BlogPost, GetOneRequest, GetOneResponse

class BlogPostUseCase(BlogPostServiceServicer):
    def GetOne(self, request: GetOneRequest, context) -> GetOneResponse:
        print(request)
        post =BlogPost(title="title",description="description",content="content") 
        author = Author(first_name="Frank",last_name="Cara")
        return GetOneResponse(post=post,author=author)


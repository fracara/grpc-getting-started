import grpc
from concurrent import futures
from proto_build import blog_pb2_grpc
from blog import BlogPostUseCase

def server() -> None:
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    try:
        # Create Grpc Server

        # Add Implementation for BlogPostService
        blog_pb2_grpc.add_BlogPostServiceServicer_to_server(
                servicer=BlogPostUseCase(), 
                server=server
            )
        
        # Intitialize and start the server
        server.add_insecure_port('[::]:50051')
        server.start()
        print('Listening on Port 50051')
        server.wait_for_termination()
    except:
        server.stop(grace=None)

server()

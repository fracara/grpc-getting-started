// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Add which syntax is used, proto2 by default
'use strict';
var grpc = require('@grpc/grpc-js');
var blog_pb = require('./blog_pb.js');

function serialize_blog_GetOneRequest(arg) {
  if (!(arg instanceof blog_pb.GetOneRequest)) {
    throw new Error('Expected argument of type blog.GetOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_GetOneRequest(buffer_arg) {
  return blog_pb.GetOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_GetOneResponse(arg) {
  if (!(arg instanceof blog_pb.GetOneResponse)) {
    throw new Error('Expected argument of type blog.GetOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_GetOneResponse(buffer_arg) {
  return blog_pb.GetOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Define the service
var BlogPostServiceService = exports.BlogPostServiceService = {
  // Add methods to the services
// Here the communication type is the simplest 'Unary rpc'
getOne: {
    path: '/blog.BlogPostService/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.GetOneRequest,
    responseType: blog_pb.GetOneResponse,
    requestSerialize: serialize_blog_GetOneRequest,
    requestDeserialize: deserialize_blog_GetOneRequest,
    responseSerialize: serialize_blog_GetOneResponse,
    responseDeserialize: deserialize_blog_GetOneResponse,
  },
};

exports.BlogPostServiceClient = grpc.makeGenericClientConstructor(BlogPostServiceService);

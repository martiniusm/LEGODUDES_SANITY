import {createClient} from '@sanity/client';

export const client = createClient({
    projectId: "i7x2uj9v",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

// skp9TMP5FXjjdsy05AqwpT5oyXWoYZb344sB2nl7g3ehK8cYKFJaAiZQ7EPecQeP3LEZWIIFzCxiJpdWmjBQUdA8E0Su925Q2Ud
// tckJEIHjRzAAqXvmzBIhK2XssYTe8G2CC9caa6jfJWSuQeISBlieou7I6mVu4teOE4NblDhsxEfp4Z5Ol

export const writeClient = createClient({
    projectId: "i7x2uj9v",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skp9TMP5FXjjdsy05AqwpT5oyXWoYZb344sB2nl7g3ehK8cYKFJaAiZQ7EPecQeP3LEZWIIFzCxiJpdWmjBQUdA8E0Su925Q2UdtckJEIHjRzAAqXvmzBIhK2XssYTe8G2CC9caa6jfJWSuQeISBlieou7I6mVu4teOE4NblDhsxEfp4Z5Ol"
})

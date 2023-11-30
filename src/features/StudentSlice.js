import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const StudentApi = createApi({
    reducerPath: 'StudentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' 
}),
    endpoints: (builder) => ({
       getstudent: builder.query({
        query: () => `/getstudent`,
      }),
       deletestudent: builder.mutation({
        query: (id) => ({
             url : `/deletestudent/${id}`,
             method :'DELETE'
         })
      }),
       updateStudent :builder.mutation({
        query :({id,student})=> ({
            url : `/updatestudent/${id}`,
            method :'PATCH',
            body :student
        })  
       }),
        createStudent :builder.mutation({
            query :(student) =>({
                url : '/createstudent',
                method: 'POST',
                body : student
            })
        })
 



    }),
  })

  export const {useGetStudentQuery,useDeletestudentMutation,useUpdateStudentMutation,useCreateStudentMutation} = StudentApi;
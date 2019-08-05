using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using LondonSalesApp.Models;

namespace LondonSalesApp.Utilities
{
    public static class CustomerDbUtil
    {
        private static readonly string _connectionString =
            "Server = DESKTOP-DAN8Q8O; Database=SalesManagement;Trusted_Connection=True;";

        public static async Task<List<Customer>> GetAllCustomers()
        {
            using (var sqlConnection = new SqlConnection(_connectionString))
            {
                using (var sqlCommand = sqlConnection.CreateCommand())
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.CommandText = "spGetAllCustomers";

                    await sqlConnection.OpenAsync();

                    using (var dataReader = await sqlCommand.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                    {
                        if (!dataReader.HasRows) return null;

                        var customers = new List<Customer>();
                        while (dataReader.Read())
                        {
                            customers.Add(dataReader.MapCustomer());
                        }

                        return customers;
                    }
                }
            }
        }

        public static async Task<Customer> GetCustomerById(int id)
        {
            using (var sqlConnection = new SqlConnection(_connectionString))
            {
                using (var sqlCommand = new SqlCommand("spGetCustomerById", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.Parameters.AddWithValue("@CustomerId", id);

                    await sqlConnection.OpenAsync();

                    using (var dataReader = await sqlCommand.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                    {
                        if (!dataReader.HasRows) return null;
                        while (dataReader.Read())
                        {
                            return dataReader.MapCustomer();
                        }
                        return null;
                    }
                }
            }
        }

        public static async Task<int> CreateCustomer(Customer customer)
        {
            using (var sqlConnection = new SqlConnection(_connectionString))
            {
                using (var sqlCommand = new SqlCommand("spCreateCustomer", sqlConnection))
                {
                    Int32 newId = 0;
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.Parameters.AddWithValue("@CustomerId", customer.CustomerId).Direction = ParameterDirection.ReturnValue;
                    sqlCommand.Parameters.AddWithValue("@FirstName", customer.FirstName);
                    sqlCommand.Parameters.AddWithValue("@LastName", customer.LastName);
                    sqlCommand.Parameters.AddWithValue("@Email", customer.Email);
                    sqlCommand.Parameters.AddWithValue("@Phone", customer.Phone);
                    sqlCommand.Parameters.AddWithValue("@CustomerSince", customer.CustomerSince);
                    sqlCommand.Parameters.AddWithValue("@Line1", customer.Line1);
                    sqlCommand.Parameters.AddWithValue("@Line2", customer.Line2);
                    sqlCommand.Parameters.AddWithValue("@City", customer.City);
                    sqlCommand.Parameters.AddWithValue("@Province", customer.Province);
                    sqlCommand.Parameters.AddWithValue("@PostalCode", customer.PostalCode);

                    await sqlConnection.OpenAsync();
                    newId = (Int32) await sqlCommand.ExecuteScalarAsync();
                    return newId;
                }
            }
        }

        public static async Task UpdateCustomer(int id, Customer customer)
        {
            using (var sqlConnection = new SqlConnection(_connectionString))
            {
                using (var sqlCommand = new SqlCommand("spUpdateCustomer", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.Parameters.AddWithValue("@CustomerId", id);
                    sqlCommand.Parameters.AddWithValue("@FirstName", customer.FirstName);
                    sqlCommand.Parameters.AddWithValue("@LastName", customer.LastName);
                    sqlCommand.Parameters.AddWithValue("@Email", customer.Email);
                    sqlCommand.Parameters.AddWithValue("@Phone", customer.Phone);
                    sqlCommand.Parameters.AddWithValue("@CustomerSince", customer.CustomerSince);
                    sqlCommand.Parameters.AddWithValue("@Line1", customer.Line1);
                    sqlCommand.Parameters.AddWithValue("@Line2", customer.Line2);
                    sqlCommand.Parameters.AddWithValue("@City", customer.City);
                    sqlCommand.Parameters.AddWithValue("@Province", customer.Province);
                    sqlCommand.Parameters.AddWithValue("@PostalCode", customer.PostalCode);

                    await sqlConnection.OpenAsync();
                    await sqlCommand.ExecuteScalarAsync();
                }
            }
        }

        public static async Task DeleteCustomer(int id)
        {
            using (var sqlConnection = new SqlConnection(_connectionString))
            {
                using (var sqlCommand = new SqlCommand("spDeleteCustomer", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.Parameters.AddWithValue("@CustomerId", id);

                    await sqlConnection.OpenAsync();
                    await sqlCommand.ExecuteScalarAsync();
                }
            }
        }
    }
}


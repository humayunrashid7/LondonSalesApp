using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LondonSalesApp.Models;
using LondonSalesApp.Repository.Interfaces;

namespace LondonSalesApp.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        public Task<IAsyncEnumerable<Customer>> GetAllCustomers()
        {
            throw new NotImplementedException();
        }

        public Task<Customer> GetCustomerById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> CreateCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }

        public Task UpdateCustomer(int id, Customer customer)
        {
            throw new NotImplementedException();
        }

        public Task DeleteCustomer(int id)
        {
            throw new NotImplementedException();
        }
    }
}

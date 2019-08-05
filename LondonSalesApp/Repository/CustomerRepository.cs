using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LondonSalesApp.Models;
using LondonSalesApp.Repository.Interfaces;
using LondonSalesApp.Utilities;

namespace LondonSalesApp.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        public async Task<IEnumerable<Customer>> GetAllCustomers()
        {
            return await CustomerDbUtil.GetAllCustomers();
        }

        public async Task<Customer> GetCustomerById(int id)
        {
            return await CustomerDbUtil.GetCustomerById(id);
        }

        public async Task<int> CreateCustomer(Customer customer)
        {
            return await CustomerDbUtil.CreateCustomer(customer);
        }

        public async Task UpdateCustomer(int id, Customer customer)
        {
            await CustomerDbUtil.UpdateCustomer(id, customer);
        }

        public async Task DeleteCustomer(int id)
        {
            await CustomerDbUtil.DeleteCustomer(id);
        }
    }
}

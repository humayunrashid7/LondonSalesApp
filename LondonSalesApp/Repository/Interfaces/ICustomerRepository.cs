using System.Collections.Generic;
using System.Threading.Tasks;
using LondonSalesApp.Models;

namespace LondonSalesApp.Repository.Interfaces
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetAllCustomers();
        Task<Customer> GetCustomerById(int id);
        Task<int> CreateCustomer(Customer customer);
        Task UpdateCustomer(int id, Customer customer);
        Task DeleteCustomer(int id);
    }
}

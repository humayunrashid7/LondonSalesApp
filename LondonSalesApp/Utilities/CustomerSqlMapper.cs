using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LondonSalesApp.Models;

namespace LondonSalesApp.Utilities
{
    public static class CustomerSqlMapper
    {
        public static Customer MapCustomer(this SqlDataReader dataReader)
        {
            var customer = new Customer();

            customer.CustomerId = Convert.ToInt32(dataReader["CustomerId"]);
            customer.FirstName = Convert.ToString(dataReader["FirstName"]);
            customer.LastName = Convert.ToString(dataReader["LastName"]);
            customer.Email = Convert.ToString(dataReader["Email"]);
            customer.Phone = Convert.ToString(dataReader["Phone"]);
            customer.CustomerSince = Convert.ToDateTime(dataReader["CustomerSince"]);
            customer.Line1 = Convert.ToString(dataReader["Line1"]);
            customer.Line2 = Convert.ToString(dataReader["Line2"]);
            customer.City = Convert.ToString(dataReader["City"]);
            customer.Province = Convert.ToString(dataReader["Province"]);
            customer.PostalCode = Convert.ToString(dataReader["PostalCode"]);

            return customer;
        }

    }
}

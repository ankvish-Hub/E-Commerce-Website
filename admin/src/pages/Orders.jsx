import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );

      if (response.data.success) {
        fetchAllOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-500 mb-6"> Orders Page</h3>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <p className="py-8 text-center text-gray-500 text-lg">
            No orders found.
          </p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-6 items-start border rounded-xl border-gray-200 bg-white shadow-sm p-5"
            >
              {/* Parcel Icon */}
              <img
                className="w-14 h-14 object-contain"
                src={assets.parcel_icon}
                alt="parcel"
              />

              {/* Order Items + Address */}
              <div>
                <div className="space-y-1">
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-gray-700">
                      {item.name}{" "}
                      <span className="font-medium">x {item.quantity}</span>{" "}
                      <span className="text-gray-500">({item.size})</span>
                    </p>
                  ))}
                </div>

                <p className="mt-4 font-semibold text-gray-900">
                  {order.address.firstName} {order.address.lastName}
                </p>

                <div className="text-sm text-gray-600 mt-2">
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country} - {order.address.zipcode}
                  </p>
                </div>

                <p className="mt-2 text-sm text-gray-700">
                  📞 {order.address.phone}
                </p>
              </div>

              {/* Order Info */}
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Items:</span>{" "}
                  {order.items.length}
                </p>
                <p>
                  <span className="font-medium">Method:</span>{" "}
                  {order.paymentMethod}
                </p>
                <p>
                  <span className="font-medium">Payment:</span>{" "}
                  {order.payment ? "✅ Done" : "⏳ Pending"}
                </p>
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>

              {/* Amount */}
              <div className="text-lg font-bold text-green-600">
                {currency}
                {order.amount}
              </div>

              {/* Status Dropdown */}
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="OrderPlaced">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;

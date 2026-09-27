#include <iostream>
using namespace std;

int k = -1000000 , h = -1000001, s = 0;
int main()
{
    while(k != h)
    {
        k = h;
        cin>>h;
        s = s + h;
    }
    cout<<s;

}